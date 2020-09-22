from django.urls import path, include
from home import views

urlpatterns = [
    path('', views.home ),
    path('mywork', views.mywork),
    path('hireme', views.hireme),

]