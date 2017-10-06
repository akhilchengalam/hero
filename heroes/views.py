from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from heroes.models import Hero
from heroes.serializers import HeroSerializer
from rest_framework.views import APIView
from django.http import Http404
from rest_framework import generics, permissions
from rest_framework import viewsets
from rest_framework.decorators import detail_route
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class HeroViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = Hero.objects.all()
    serializer_class = HeroSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

class HeroSearch(generics.ListAPIView):
    serializer_class = HeroSerializer

    def get_queryset(self):
        name = self.kwargs['name']
        return Hero.objects.filter(name__icontains=name)


# class HeroList(generics.ListCreateAPIView):
#     queryset = Hero.objects.all()
#     serializer_class = HeroSerializer
#
#
# class HeroDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Hero.objects.all()
#     serializer_class = HeroSerializer


# class HeroList(APIView):
#     def get(self, request, format=None):
#         hero = Hero.objects.all()
#         serializer = HeroSerializer(hero, many=True)
#         return Response(serializer.data)
#
#     def post(self, request, format=None):
#         serializer = HeroSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#
# class HeroDetail(APIView):
#
#     def get_object(self, pk):
#         try:
#             return Hero.objects.get(pk=pk)
#         except Hero.DoesNotExist:
#             raise Http404
#
#     def get(self, request, pk, format=None):
#         hero = self.get_object(pk)
#         serializer = HeroSerializer(snippet)
#         return Response(serializer.data)
#
#     def put(self, request, pk, format=None):
#         hero = self.get_object(pk)
#         serializer = HeroSerializer(hero, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#     def delete(self, request, pk, format=None):
#         hero = self.get_object(pk)
#         hero.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)
#


# @api_view(['GET', 'POST'])
# def herolist(request, format=None):
#     """
#     List all code snippets, or create a new snippet.
#     """
#     if request.method == 'GET':
#         hero = Hero.objects.all()
#         serializer = HeroSerializer(hero, many=True)
#         return Response(serializer.data)
#
#     elif request.method == 'POST':
#         serializer = HeroSerializer(data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#
# @api_view(['GET', 'PUT', 'DELETE'])
# def herodetail(request, pk, format=None):
#     """
#     Retrieve, update or delete a code snippet.
#     """
#     try:
#         hero = Hero.objects.get(pk=pk)
#     except Hero.DoesNotExist:
#         return HttpResponse(status=404)
#
#     if request.method == 'GET':
#         serializer = HeroSerializer(hero)
#         return Response(serializer.data)
#
#     elif request.method == 'PUT':
#         data = JSONParser().parse(request)
#         serializer = HeroSerializer(snippet, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#     elif request.method == 'DELETE':
#         hero.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)
