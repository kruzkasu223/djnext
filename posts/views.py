from django.shortcuts import render
from .models import Posts
# Create your views here.

def posts_list(request):
    posts = Posts.objects.all()
    return render(request, 'index.html', {"posts": posts})
