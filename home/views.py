from django.shortcuts import render


# Create your views here.
def home(request):
    print(request.headers)
    # request.headers['Authorisation'] = "Token"
    return render(request, 'home.html')

def mywork(request):
    return render(request, 'mywork.html')

def hireme(request):
    return render(request, 'hireme.html')




