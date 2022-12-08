from django.db import models
from django.utils import timezone

now = timezone.now()

class Post(models.Model):
    title = models.CharField(max_length=50)
    content = models.TextField()
    published = models.BooleanField(default=False)
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.title}'
