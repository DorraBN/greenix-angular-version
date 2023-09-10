import { Component, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-chatbot',
    templateUrl: './chatbot.component.html',
    styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements AfterViewInit {

    constructor(private renderer: Renderer2) { }

    ngAfterViewInit(): void {
        this.loadScript('https://cdn.botpress.cloud/webchat/v1/inject.js');
        this.loadScript('https://mediafiles.botpress.cloud/1f2fdfed-755e-4fbb-befd-4a848c273157/webchat/config.js');
    }

    private loadScript(scriptUrl: string): void {
        const script = this.renderer.createElement('script');
        script.src = scriptUrl;
        script.defer = true; // Adjust this as needed
        this.renderer.appendChild(document.body, script);
    }
}

