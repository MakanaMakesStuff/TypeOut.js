export class Typer {
    temp: any
    obj: any

    constructor(){
        if(!(this instanceof Typer)) return new Typer()
    }

    start (selector: string, delay: number) {
        this.obj = document.querySelectorAll(selector)
        const children: Element[] = Array.from(this.obj)
        for(const child of children) this.process(child, delay)
    }

    set () {
        this.obj = document.querySelectorAll("[class*='type-']")
        const children: Element[] = Array.from(this.obj)
        for(const child of children) this.process(child)
    }

   
    process (child: Element, delay?: number) {
        const init = child.innerHTML
        let cout = 0
        let counter: any

        if(!delay) {
            const timer = Array.from(child.classList).find(item => item.includes('type-'))?.split('-')[1]
            if (!timer) return console.info('cannot find type class on child element')
            delay = ~~timer
        }

        child.innerHTML = ""
        counter = setInterval(()=> this.display(child, init, cout++, counter), delay)
    }

    display (child: Element, text: string, cout: number, counter: any) {
        if(cout >= text.length) return clearInterval(counter)
        child.innerHTML = text.slice(0, cout + 1)
    }
}