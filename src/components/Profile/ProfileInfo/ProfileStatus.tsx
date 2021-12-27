import React from 'react';

type ProfileStatusType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }


    render() {
        return (
            <div>
                {this.state.editMode ?
                    <input
                        type="text"
                        value={this.props.status}
                        autoFocus
                        onBlur={this.deactivateEditMode.bind(this)}
                    />
                    :
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                }
            </div>)
    };
}