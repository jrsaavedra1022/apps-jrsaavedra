""" Traer imagenes."""
from os import scandir


class ImagesGet():
	
	def ls2(path): 
		try:
			return [obj.name for obj in scandir(path) if obj.is_file()]
		except Exception as e:
			print("error: " + str(e))