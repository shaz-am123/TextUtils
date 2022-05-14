import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState('')
    function capitalize()
    {
        setText(text.toLowerCase())
        const arr = text.split(" ")
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
        }
        const str = arr.join(" ");
        setText(str);
    }

    function handleClear(){
        props.showAlert("Cleared the text","success")
        setText("")
    }
    return (
        <>
            <div className='container'>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea onChange={event=>setText(event.target.value)} style={{backgroundColor: props.mode==='dark'?'rgb(168, 173, 181)':'white', color: 'white'}} className="form-control" aria-label="With textarea" rows='8' value={text}></textarea>
                </div>
                <button onClick={()=>setText(text.toUpperCase())} className={`btn btn-${props.mode==='light'?'dark':'light'}`}>Convert to uppercase</button>
                <button onClick={()=>setText(text.toLowerCase())} className={`btn btn-${props.mode==='light'?'dark':'light'}`}>Convert to lowercase</button>
                <button onClick={capitalize} className={`btn btn-${props.mode==='light'?'dark':'light'}`}>Capitalize</button>
                <button onClick={handleClear} className={`btn btn-${props.mode==='light'?'dark':'light'}`}>Clear Text</button>
            </div>

            <div className='container my-5'>
                <h2>Your text Summary</h2>
                <div>
                    <p>Total Words: {text[text.length-1]===' ' || text.length===0 ? text.split(' ').length-1:text.split(' ').length}</p>
                    <p>Total characters: {text.length}</p>
                    <p>Reading Time: {0.008 * text.split(" ").length} minutes</p>
                </div>

                <h3 style={{marginTop: '5%'}}>Preview</h3>
                <p>{text.length>0?text:'Enter text to see preview here'}</p>
            </div>
        </>
    )
}
