/**
            this.setTextBox(textBox);
            textBox.setText(this.value);
            this.find('[type=file]').setAttr('disabled', value);
        } else {
            IInput.state.call(name, value);