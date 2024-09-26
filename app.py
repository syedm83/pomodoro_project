from flask import Flask, render_template, jsonify
import threading

app = Flask(__name__, static_folder='static')

time_left = 25 * 60  # 25 minutes in seconds
timer_thread = None  # Initialize timer thread variable

def countdown():
    global time_left
    while time_left > 0:
        time.sleep(1)
        time_left -= 1

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/start')
def start_timer():
    global timer_thread, time_left

    if timer_thread is None or not timer_thread.is_alive():
        timer_thread = threading.Thread(target=countdown)
        timer_thread.start()
        time_left = 25 * 60  # Reset time on start
        return jsonify(status='started')
    else:
        return jsonify(status='already_running')

@app.route('/reset')
def reset_timer():
    global time_left, timer_thread

    if timer_thread is not None and timer_thread.is_alive():
        timer_thread.join()  # Wait for thread to finish
    time_left = 25 * 60
    return jsonify(status='reset')

@app.route('/time_left')
def get_time_left():
    mins, secs = divmod(time_left, 60)
    return jsonify(minutes=mins, seconds=secs)

if __name__ == '__main__':
    app.run(debug=True)