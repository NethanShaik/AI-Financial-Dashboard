from django.urls import path
from .views import dashboard_summary, monthly_overview

urlpatterns = [
    path("summary/", dashboard_summary, name="dashboard-summary"),
    path("monthly-overview/", monthly_overview, name="monthly-overview"),
]