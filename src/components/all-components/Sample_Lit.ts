import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('sample-lit')
export class SampleLit extends LitElement {
    @property({ type: Number })
    val = 0;

    inc() {
        this.val++;
    }

    dec() {
        this.val--;
    }

    render() {
        return html`
        <div>
            Hi, I'm a (BROKEN) lit component:
            <button type="button" @click=${this.dec}>-</button>
            ${this.val}
            <button type="button" @click=${this.inc}>+</button>
            My code is:
            <img src="sample_lit.png"/>
        </div>
        `;
    }
}

