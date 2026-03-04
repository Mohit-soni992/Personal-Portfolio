import { Instagram , Linkedin , Twitter } from 'lucide-react';
import React from 'react';

export const ContactSection = () => {
    return (
        <section id="contact" className="py-20 px-4 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 blur-[120px] -z-10" />

            <div className="container max-w-2xl mx-auto">
                <div className="text-center mb-10 space-y-3">
                    <h2 className="text-3xl md:text-4xl font-bold animate-fade-in-delay-1 opacity-0" style={{animationFillMode: 'forwards'}}>
                        Get In <span className='text-primary'>Touch</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in-delay-2 opacity-0" style={{animationFillMode: 'forwards'}}>
                        Have a project in mind? Let's build something amazing together.
                    </p>
                </div>

                <form 
                    action="https://formspree.io/f/xanjozwb" 
                    method="POST"
                    className="space-y-6 bg-secondary/10 p-8 rounded-2xl border border-border/50 backdrop-blur-sm animate-fade-in-delay-3 opacity-0 shadow-xl"
                    style={{animationFillMode: 'forwards'}}
                >

                    <div className="space-y-2">
                        <label className="text-sm font-medium ml-1">Full Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Your name" 
                            className="w-full p-4 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300 outline-none hover:border-primary/50"
                            required 
                        />
                    </div>
                    {/* Email Input Group */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium ml-1">Your Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="abc@example.com" 
                            className="w-full p-4 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300 outline-none hover:border-primary/50"
                            required 
                        />
                    </div>

                    {/* Message Input Group */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium ml-1">Message</label>
                        <textarea 
                            name="message" 
                            placeholder="Write your message here..." 
                            rows="5"
                            className="w-full p-4 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300 outline-none hover:border-primary/50 resize-none"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        className="cosmic-button w-full py-4 text-lg font-semibold transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-primary/20"
                    >
                        Send Message
                    </button>
                </form>
                <div className='pt-8'>
                    <h4 className="font-medium mb-4">Connect to me.</h4>
                    <div className="flex space-x-4 justify-center">
                       <a href='https://www.linkedin.com/in/mohit-soni01/' target='_blank'>
                          <Linkedin />
                       </a>
                       <a href='https://www.twitter.com/sonimohit6367' target='_blank'>
                          <Twitter />
                       </a>
                       <a href='https://www.instagram.com/xoni_mohet07/' target='_blank'>
                          <Instagram />
                       </a>
                    </div>

                </div>
            </div>
        </section>
    );
};