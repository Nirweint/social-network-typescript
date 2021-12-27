import React, {ChangeEvent} from 'react';

type ProfileStatusType = {
    status: string
    updateProfileStatusHandler: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false,
        statusValue: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateProfileStatusHandler(this.state.statusValue)
    }
    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            statusValue: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>) {
        if (prevProps.status !== this.props.status)
        this.setState({
            statusValue :this.props.status
        })
    }

    render() {
        return (
            <div>
                {this.state.editMode ?
                    <input
                        type="text"
                        value={this.state.statusValue}
                        autoFocus
                        onBlur={this.deactivateEditMode}
                        onChange={this.onChangeHandler}
                    />
                    :
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "Dont have status yet"}</span>
                }
            </div>)
    };
}