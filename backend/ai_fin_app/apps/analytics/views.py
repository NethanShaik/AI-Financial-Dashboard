from django.db.models import Sum
from django.db.models.functions import TruncMonth
from django.http import JsonResponse
from apps.finance.models import Transaction


def dashboard_summary(request):
    total_revenue = (
        Transaction.objects.filter(transaction_type="revenue")
        .aggregate(total=Sum("amount"))["total"] or 0
    )

    total_expense = (
        Transaction.objects.filter(transaction_type="expense")
        .aggregate(total=Sum("amount"))["total"] or 0
    )

    data = {
        "total_revenue": float(total_revenue),
        "total_expense": float(total_expense),
        "net_profit": float(total_revenue - total_expense),
        "transaction_count": Transaction.objects.count(),
    }

    return JsonResponse(data)


def monthly_overview(request):
    revenue_data = (
        Transaction.objects.filter(transaction_type="revenue")
        .annotate(month=TruncMonth("transaction_date"))
        .values("month")
        .annotate(total=Sum("amount"))
        .order_by("month")
    )

    expense_data = (
        Transaction.objects.filter(transaction_type="expense")
        .annotate(month=TruncMonth("transaction_date"))
        .values("month")
        .annotate(total=Sum("amount"))
        .order_by("month")
    )

    monthly_map = {}

    for item in revenue_data:
        month_str = item["month"].strftime("%Y-%m")
        monthly_map[month_str] = {
            "month": month_str,
            "revenue": float(item["total"]),
            "expense": 0.0,
        }

    for item in expense_data:
        month_str = item["month"].strftime("%Y-%m")
        if month_str not in monthly_map:
            monthly_map[month_str] = {
                "month": month_str,
                "revenue": 0.0,
                "expense": float(item["total"]),
            }
        else:
            monthly_map[month_str]["expense"] = float(item["total"])

    data = sorted(monthly_map.values(), key=lambda x: x["month"])
    return JsonResponse(data, safe=False)