import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-organism',
  templateUrl: './contact-organism.component.html',
  styleUrls: ['./contact-organism.component.scss']
})
export class ContactOrganismComponent {
  contactForm: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.contactForm.invalid) return;
    this.isSubmitting = true;

    // Simulación de envío de formulario (API call)
    setTimeout(() => {
      alert('Message sent! Thanks for reaching out.'); 
      this.contactForm.reset();
      this.isSubmitting = false;
    }, 1000);
  }

  openSocial(url: string) {
    window.open(url, '_blank');
  }
}
