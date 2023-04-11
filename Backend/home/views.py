from rest_framework.permissions import IsAuthenticated,IsAuthenticatedOrReadOnly
from rest_framework.views import APIView
from .models import Books
from .serializers import BooksInfoSerializer
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render,HttpResponseRedirect
from django.contrib.auth import authenticate,logout,login

class BooksList(APIView):
    serializer_class = BooksInfoSerializer
    permission_classes = [IsAuthenticated]
    def get(self, request,count =None):
        
       
        queryset = Books.objects.all().order_by('id')[:count]
        serializer = BooksInfoSerializer(queryset, many=True)
        
        return Response(serializer.data, status=status.HTTP_200_OK)

def Home(request):
    if request.method == 'POST':
        print(request)
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request,user)
            return HttpResponseRedirect(redirect_to='home')
        else:
            return render(request, 'login.html')
    return render(request, 'login.html')
