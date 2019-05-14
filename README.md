## Adding Textures to Mapping the Milky Way

Clone this repository:

```
git clone https://github.com/lsst-epo/formal-ed-investigations.git
```

You'll need a server to view the investigations.

```
cd formal-ed-investigations

If using Python 2:
python -m SimpleHTTPServer 9000

If using Python 3:
python -m http.server 9000
```

Then navigate to localhost:9000/mapping-the-milky-way to view the investigation. 

In another terminal window, navigate to the Milky Way directory
```
cd mapping-the-milky-way
```

To change your texture first add your image to the 'assets/Generic' folder. Then, to change the image in the map, go to js/canvas.js and at line 13, replace

```
  texture = new THREE.TextureLoader().load( 'assets/' + textureValue + '.png' );
``` 

with 

```
  texture = new THREE.TextureLoader().load( 'assets/' + 'Generic/YOUR-IMAGE-NAME-HERE' + '.png' );
``` 
