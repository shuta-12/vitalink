from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import ExpenseViewSet, BalanceView

router = DefaultRouter()
router.register(r'expenses', ExpenseViewSet) # 'expenses' というパスでExpenseViewSetを登録

urlpatterns = [
    path('', include(router.urls)), # routerで生成されたURLを含める
    path('balance/', BalanceView.as_view(), name='balance'), # balanceのURL
]