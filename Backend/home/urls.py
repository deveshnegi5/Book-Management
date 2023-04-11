from django.urls import path
from . import views


urlpatterns =[
    path('home/',views.BooksList.as_view(),name= 'home'),
    path('home/<int:count>/',views.BooksList.as_view(),name= 'detail_home'),
    path('',views.Home,name= 'login')
]