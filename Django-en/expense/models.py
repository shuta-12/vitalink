import uuid

from django.db import models

# Create your models here.

class Expense(models.Model):

    class Meta:
        db_table = "expense"
        ordering = ["created_at"]
        verbose_name = verbose_name_plural = '家計簿'



    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    title = models.CharField(verbose_name="項目", max_length=40, unique=True)

    price = models.IntegerField(verbose_name="価格", null=True, blank=True)

    created_at = models.DateTimeField(verbose_name="登録日時", auto_now_add=True)