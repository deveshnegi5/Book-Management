from django.db import models

# Create your models here.
class Books(models.Model):
    title = models.CharField(max_length=100, blank=False)
    author = models.CharField(max_length=100, blank=False)
    authors	= models.CharField(max_length=100, blank=False)
    isbn13	= models.CharField(max_length=100, blank=False)
    isbn10	=models.CharField(max_length=100, blank=False)
    price	=models.CharField(max_length=100, blank=False)
    publisher	=models.CharField(max_length=100, blank=False)
    pubyear	=models.CharField(max_length=100, blank=False)
    subjects	=models.CharField(max_length=100, blank=False)
    lexile	=models.CharField(max_length=100, blank=True,null=True)
    pages=models.CharField(max_length=100, blank=False)
    dimensions=models.CharField(max_length=100, blank=False)
