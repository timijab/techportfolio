from flask import Flask, render_template, redirect, url_for, flash
from flask import send_file
from flask import request
from flask_wtf import FlaskForm
from flask_ckeditor import CKEditorField
from wtforms import SubmitField, StringField
from wtforms.validators import InputRequired
from flask_bootstrap import Bootstrap
from flask_ckeditor import CKEditor
import smtplib
import datetime
from dotenv import load_dotenv
import os

app = Flask(__name__)
# app won't  work without security autorisation
app.config['SECRET_KEY'] = '8BYkEfBA6O6donzWlSihBXox7C0sKR6b'
app.config['TEMPLATES_AUTO_RELOAD'] = True
bootstrap = Bootstrap(app)
ckeditor = CKEditor(app)
today = datetime.date.today()
year = today.year
load_dotenv()

class ContactForm(FlaskForm):
    title = StringField('Title', validators=[InputRequired()])
    name = StringField('Name', validators=[InputRequired()])
    message = CKEditorField('Message', validators=[InputRequired()])
    submit = SubmitField('Send')



@app.route('/', methods=['GET', 'POST'])
def main():
    if request.method == 'GET':
        return render_template('index.html', yearper=year)
    elif request.method == "POST":
        return render_template('index.html')

other_email = os.getenv('OTHEREMAIL')
my_email = os.getenv('MYEMAIL')
password = os.getenv('PASSWORD')
connection = smtplib.SMTP("smtp.gmail.com", 587)
connection.starttls()

# we need to re check this connection and create an env variable to hide password.

@app.route('/contact-me', methods=["GET", "POST"])
def contact():
    
    return render_template('contact.html')

@app.route('/submit', methods=["POST"])
def submitted():    
    if request.method == "POST":
        name_data = request.form['name']
        email_data = request.form['email']
        subject_data = request.form['subject']
        message_data = request.form['message']
        try:
            connection.login(user=my_email, password=password)
            connection.sendmail(from_addr=my_email, to_addrs=other_email, msg=f"subject:{subject_data} \n\n "
                                                                          f"name of sender {name_data} \n\n "
                                                                          f"{message_data} \n\n"
                                                                          f"{email_data} \n\n")
                                                                          
            connection.close()
        except Exception as e:
            return f"An error occurred: {str(e)}"
        
        # return f"You submitted: {name_data}{email_data}{subject_data}{message_data}"
        return redirect(url_for('contact'))
    # redirect to the same page again.
    else:
        return  '<h1> Method not allowed </h1>'
   

@app.route('/download')
def download():
    path = 'AFOLAYAN ISAAC ADEMIDE -CV.pdf'
    return send_file(path, as_attachment=True)


if __name__ == "__main__":
    app.run(debug=False)
