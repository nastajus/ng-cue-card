# UI and product design

The shoebox makes storage tangible and the two faces make recall a distinct interaction: attempt the answer, flip, then judge whether it came to mind. The movement expresses an outcome. Remembered cards leave the quiz and missed ones stay available for another attempt. Colour and motion make the collection feel responsive, as the original demos show. [Project demos](../../README.md#demos), [Nicky Case’s interactive explanation](https://ncase.me/remember/).

## Design around the content and feedback

The journal compared real index-card proportions, font sizes and sentence lengths while deciding how much question or answer text should fit. The useful test is whether short questions stay readable and longer examples wrap comfortably at the widths the app actually supports. The scene width is a concrete constraint. Old device-resolution tables and golden-ratio calculations are weak evidence for whether a form is comfortable to use. [UI polish investigation](../archive/development-journal-2019.md?plain=1#L213).

The [form template](../../src/app/components/cue-card-entry-form/cue-card-entry-form.component.html) uses separate question and answer fields, labelled actions and feedback for a saved new card. Its Add/Save button accepts either face, which suits a card drafted before both sides are ready. A complete validation design would also consider whitespace, keyboard flow and whether incomplete cards belong in an active quiz. Responsive layout is a content problem. Labels and fields can share a row when there is room and stack when they no longer fit comfortably.

## Scope the study experience

The original scope combined an appealing desktop experience, Leitner scheduling and local storage. Offline phone use was attractive because it opened up studying on a commute, but it called for responsive and touch design as well as offline data behaviour. Rich media and Anki exchange belonged to a longer roadmap. The checkout implements the visual prototype and a single recall session using seed data. A useful progression for the underlying design would be to define data and scheduling rules before adding the ability to replay movement across levels. [Portfolio roadmap](https://nastajus.github.io/archive/portfolio/cue-card.html), [recovered workflow and product notes](../archive/development-journal-2019.md#supplement--file-export-and-the-study-workflow).

[Learning index](../LEARNING.md)
