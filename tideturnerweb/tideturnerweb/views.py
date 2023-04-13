from django.contrib.auth.models import User
from django.db.models import Q
from django.views.generic import TemplateView
from tideturnerweb.models import WashingMachineSetting, MicroplasticFilter, WashingMachineRun, Following
from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response

from tideturnerweb.serializers import UserSerializer, WashingMachineSettingSerializer, MicroplasticFilterSerializer, WashingMachineRunSerializer, FollowingSerializer


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    # permission_classes = [permissions.IsAuthenticated]

    @action(detail=False, methods=['post'])
    def new_user(self, request):
        if "username" not in request.data or "password" not in request.data:
            return Response({"error": "Missing username or password parameter"},
                            status=status.HTTP_400_BAD_REQUEST)

        existing = User.objects.all().filter(username=request.data["username"])
        if existing.exists():
            return Response({"error": "User already exists"},
                            status=status.HTTP_403_FORBIDDEN)
        
        try:
            user = User.objects.create_user(username=request.data["username"],
                                            password=request.data["username"])
        except Exception:
            return Response({"error": "User creation failed"},
                           status=status.HTTP_403_FORBIDDEN)


        user.save()
        return Response({'status': 'user created'})

class WashingMachineSettingViewSet(viewsets.ModelViewSet):
    queryset = WashingMachineSetting.objects.all().order_by("-created_on")
    serializer_class = WashingMachineSettingSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_queryset(self):
        lookups = Q(owner=self.request.user)

        return self.queryset.filter(lookups)

class MicroplasticFilterViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = MicroplasticFilter.objects.all().order_by("-created_on")
    serializer_class = MicroplasticFilterSerializer
    permission_classes = [permissions.IsAuthenticated]

class WashingMachineRunViewSet(viewsets.ModelViewSet):
    queryset = WashingMachineRun.objects.all().order_by("-started")
    serializer_class = WashingMachineRunSerializer
    permission_classes = [permissions.IsAuthenticated]

class FollowingViewSet(viewsets.ModelViewSet):
    queryset = Following.objects.all()
    serializer_class = FollowingSerializer
    permission_classes = [permissions.IsAuthenticated]

