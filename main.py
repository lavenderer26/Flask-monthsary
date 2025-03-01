from flask import Flask, render_template, jsonify, url_for
import os

app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "default-secret-key")

@app.route('/')
def home():
    # Get list of images from static/images directory
    image_dir = os.path.join(app.static_folder, 'images')
    if not os.path.exists(image_dir):
        os.makedirs(image_dir)
    # Create audio directory if it doesn't exist
    audio_dir = os.path.join(app.static_folder, 'audio')
    if not os.path.exists(audio_dir):
        os.makedirs(audio_dir)
    images = []
    for file in os.listdir(image_dir):
        if file.lower().endswith(('.png', '.jpg', '.jpeg', '.gif')):
            images.append(url_for('static', filename=f'images/{file}'))
    return render_template('index.html', images=images)

@app.route('/get-images')
def get_images():
    image_dir = os.path.join(app.static_folder, 'images')
    if not os.path.exists(image_dir):
        os.makedirs(image_dir)
    images = []
    for file in os.listdir(image_dir):
        if file.lower().endswith(('.png', '.jpg', '.jpeg', '.gif')):
            images.append(url_for('static', filename=f'images/{file}'))
    return jsonify(images)

if __name__ == '__main__':
    # Read port from environment variable; default to 5000 if not set.
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
add main.py
