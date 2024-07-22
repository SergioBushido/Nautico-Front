/*import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Contact Form Submitted:', this.contact);
    // Add your form submission logic here (e.g., send data to a server)
  }
}*/
import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Contact Form Submitted:', this.contact);
    this.sendEmail();
  }

  sendEmail() {
    const serviceID = 'service_wl5k1u8';
    const templateID = 'template_v7z1lvr';
    const userID = 'o5ZsgSDVi3GwxhCxi';

    const templateParams = {
      from_name: this.contact.name,
      from_email: this.contact.email,
      message: this.contact.message
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message Sent Successfully!');
      }, (err) => {
        console.error('FAILED...', err);
        alert('Failed to send message. Please try again.');
      });
  }
}
