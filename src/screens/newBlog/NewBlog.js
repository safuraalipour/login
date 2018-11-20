import React from 'react';
import {Text} from "react-native";
import {Container, TextInput, Seperator} from "../../styles";
import update from 'immutability-helper';

export default class newBlog extends React.Component {
    textInputRef = [];
    state = {
        lines: [{
            type: 'PARAGRAPH',
            value: ''
        }]
    };

    updateParagraph = (index) => (value) => {
        this.setState(update(this.state, {
            lines: {
                [index]: {
                    value: {
                        $set: value
                    }
                }
            }
        }))
    };

    createNewLine = () => {
        this.setState(update(this.state, {
            lines: {
                $push: [{
                    type: 'PARAGRAPH',
                    value: ''
                }]
            }
        }), () => {
            this.textInputRef[this.textInputRef.length - 1].focus();
        })
    };

    textInputRef = (index) => (elem) => {
        this.textInputRef[index] = elem;
    };

    render() {
        const {lines} = this.state;
        return (
            <Container>
                <TextInput
                    placeholder={'Title'}
                />
                <Seperator/>
                {lines.map((line, index) =>
                    line.type === 'PARAGRAPH' ?
                        <TextInput
                            key={index}
                            innerRef={this.textInputRef(index)}
                            value={line.value}
                            onChangeText={this.updateParagraph(index)}
                            // placeholder={index === 0 ? 'Start typing' : ''}
                            placeholder={'Here is a line'}
                            onSubmitEditing={this.createNewLine}
                        /> : null
                )}
                <TextInput
                    placeholder={'Start typing'}
                />
            </Container>
        )
    }
}