import React, {ChangeEvent} from 'react';

type ProfileStatusType = {
    status: string
    handleProfileStatusUpdate?: (status: string) => void
}

const DEFAULT_STATUS = "Dont have status yet"

export class ProfileStatus extends React.PureComponent<ProfileStatusType> {
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
        this.props.handleProfileStatusUpdate && this.props.handleProfileStatusUpdate(this.state.statusValue)
    }
    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            statusValue: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>) {
        if (prevProps.status !== this.props.status)
            this.setState({
                statusValue: this.props.status
            })
    }

    render() {
        return (
            <>
                {this.state.editMode
                    ?
                    <input
                        type="text"
                        value={this.state.statusValue}
                        autoFocus
                        onBlur={this.deactivateEditMode}
                        onChange={this.handleChange}
                    />
                    :
                    <span onDoubleClick={this.activateEditMode}>
                        {this.props.status || DEFAULT_STATUS}
                    </span>
                }
            </>)
    };
}