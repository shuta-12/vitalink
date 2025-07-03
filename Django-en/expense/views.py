# expense/views.py
from rest_framework import viewsets
from .models import Expense
from .serializers import ExpenseSerializer
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.views import APIView
from django.db.models import Sum

class StandardResultsPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100

class ExpenseViewSet(viewsets.ModelViewSet):
    # ここを 'recorded_at' から 'created_at' に変更します。
    queryset = Expense.objects.all().order_by('-created_at') # 記録日時が新しい順にソート
    serializer_class = ExpenseSerializer
    pagination_class = StandardResultsPagination

class BalanceView(APIView):
    def get(self, request, format=None):
        # 現在のモデルフィールド名に合わせて調整が必要になる可能性があります。
        # 例えば、金額が price フィールドにあると仮定します。
        total_income = Expense.objects.filter(price__gt=0).aggregate(Sum('price'))['price__sum'] or 0
        total_expenses = Expense.objects.filter(price__lt=0).aggregate(Sum('price'))['price__sum'] or 0

        balance = total_income + total_expenses

        status = "黒字" if balance >= 0 else "赤字"
        return Response({"balance": balance, "status": status})
