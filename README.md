# MYMODAL
popups generator

# Description

This component allows you to make your own popups.
This popups can be as simple as a dialog window to pass same information to the user or can be complex and have a form capable of capture information you can recover after the user closes the form.

# Usage

The component have the following parameters:

    Dialog.content -> the html corresponding to your dialog
    Dialog.title -> the title that should appear in the dialog
    Dialog.delay -> a timer to animate the appearance of the dialog. It defaults to 500 miliseconds.
    Dialog.valuedFields -> an array with the ids of the fields which value you want to capture.
    Dialog.retVal -> an object returned after the user click in the button you define as ok button. The fields of this object are the ones specified in Dialog.valuedFields
    Dialog.onOk -> a function to be invoked when the user presses the button defined as ok button.
    Dialog.OK_ID -> the id of the ok button
    Dialog.cancel_ID -> the id of the cancel button