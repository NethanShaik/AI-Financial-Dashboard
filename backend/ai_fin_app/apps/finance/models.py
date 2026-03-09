from django.db import models

class Transaction(models.Model):
    TRANSACTION_TYPES = [
        ("revenue","Revenue"),
        ("expense","Expense"),
    ]

    CATEGORY_CHOICES = [
        ('sales','Sales'),
        ('marketing','Marketing'),
        ('operations','Operations'),
        ('salary','Salary'),
        ('software','Software'),
        ('other','Other'),
    ]

    title = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    transaction_type = models.CharField(max_length=20, choices=TRANSACTION_TYPES)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='other')
    transaction_date = models.DateField()
    description = models.TextField(blank=True, null=True)
    invoice_file = models.FileField(upload_to='invoices/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.title} - {self.amount}"
