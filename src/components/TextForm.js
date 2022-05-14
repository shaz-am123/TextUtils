import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState('')
    function capitalize()
    {
        setText(text.toLowerCase())
        const arr = text.split(" ")
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const str = arr.join(" ");
        setText(str);
    }
    return (
        <>
            <div className='container'>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea onChange={event=>setText(event.target.value)} className="form-control" aria-label="With textarea" rows='8' value={text}></textarea>
                </div>
                <button onClick={()=>setText(text.toUpperCase())} className='btn btn-primary'>Convert to uppercase</button>
                <button onClick={()=>setText(text.toLowerCase())} className='btn btn-primary'>Convert to lowercase</button>
                <button onClick={capitalize} className='btn btn-primary'>Capitalize</button>
                <button onClick={()=>setText("")} className='btn btn-primary'>Clear Text</button>
            </div>

            <div className='container my-5'>
                <h2>Your text Summary</h2>
                <div>
                    <p>Total Words: {text[text.length-1]===' ' || text.length===0 ? text.split(' ').length-1:text.split(' ').length} and Total characters:{text.length}</p>
                    <p>Reading Time: {0.008 * text.split(" ").length} minutes</p>
                </div>

                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
