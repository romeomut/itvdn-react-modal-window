import './ModalWnd.css'

export default function ModalWnd({call, onDestroy}){

    if (!call) {
        return null
    }

    const closeWnd = (e) =>{
        if (e.target.className === 'modal') {
            onDestroy()
        }
    }

    return(
        <div className='modal' onClick={closeWnd}>
            <div className='modal-content'>
                <i className='close' onClick={onDestroy}>X</i>
                <h1>Видалити запис?</h1>
                <div className='btns'>
                    <button className='accept'>Тaк, видалити!</button>
                    <button className='reject' onClick={onDestroy}>Ні, залишити!</button>
                </div>
            </div>
         </div>
    )
}