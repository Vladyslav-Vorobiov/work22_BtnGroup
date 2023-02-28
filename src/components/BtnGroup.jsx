import React from 'react'
import cn from 'classnames'

class BtnGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: ''
        }
    }

    changeState = (btnPosition) => () => this.setState(({active}) => ({active: btnPosition}))

    changeStateLeftBtn = this.changeState('left')
    changeStateRightBtn = this.changeState('right')

    render() {

        const leftBtnClass = cn('btn btn-success left', {'active': this.state.active === 'left'})
        const RightBtnClass = cn('btn btn-success right', {'active': this.state.active === 'right'})

        return (
            <div className="container-sm text-center mt-5">
                <div className="btn-group" role="group">
                    <button type="button" className={leftBtnClass} onClick={this.changeStateLeftBtn}>Left</button>
                    <button type="button" className={RightBtnClass} onClick={this.changeStateRightBtn}>Right</button>
                </div>
            </div>
        )
    }
}

export default BtnGroup