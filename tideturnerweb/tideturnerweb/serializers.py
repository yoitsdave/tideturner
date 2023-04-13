from django.contrib.auth.models import User, Group
from tideturnerweb.models import WashingMachineSetting, MicroplasticFilter, WashingMachineRun, Following
from rest_framework import serializers
    
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", 'url', 'username', 'email', 'groups', "followers", "following", "runs"]

class WashingMachineSettingSerializer(serializers.ModelSerializer):
    owner = serializers.PrimaryKeyRelatedField(
        read_only=True, 
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = WashingMachineSetting
        fields = ["id", "machine_name", "setting_name", "water_capacity", "duration", "created_on", "runs", "owner"]

class MicroplasticFilterSerializer(serializers.ModelSerializer):
    class Meta:
        model = MicroplasticFilter
        fields = ["id", "filter_name", "created_on", "mp_ratio", "runs"]

class WashingMachineRunSerializer(serializers.ModelSerializer):
    owner = serializers.PrimaryKeyRelatedField(
        read_only=True, 
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = WashingMachineRun

        fields = ["id", "setting", "filter", "started", "notified", "owner"]

    def create(self, validated_data):
        run = WashingMachineRun(
            setting=validated_data["setting"],
            filter=validated_data["filter"],
            user=self.context['request'].user
        )

        run.save()
        return run

class FollowingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Following
        follower = serializers.PrimaryKeyRelatedField(
            read_only=True, 
            default=serializers.CurrentUserDefault()
        )
        fields = ["followed"]