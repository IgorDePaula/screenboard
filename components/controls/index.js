import Size from './Size.js'
import Color from './Color.js'
import Tools from './Tools.js'

export default function(context) {

    const controls = [
        Size(context),
        Color(context),
        Tools(context)
    ]

    function updateAll() {
        controls.forEach( control => control.update())
    }
    
    return {
        updateAll
    }
}