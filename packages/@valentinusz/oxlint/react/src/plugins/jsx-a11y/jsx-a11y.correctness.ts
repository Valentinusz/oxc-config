import type {OxlintConfig} from "oxlint";

export const jsxA11yCorrectness = {
    rules: {
        // ✅ jsx-a11y/alt-text
        // Enforce that all elements that require alternative text have meaningful information to relay back to the end
        // user.
        'jsx-a11y/alt-text': 'error',

        // ✅ jsx-a11y/anchor-has-content
        // Enforce that anchors have content and that the content is accessible to screen readers. Accessible means that it
        // is not hidden using the `aria-hidden` prop.
        'jsx-a11y/anchor-has-content': 'error',

        // ✅ jsx-a11y/anchor-is-valid
        // The HTML `<a>` element, with a valid `href` attribute, is formally defined as representing a hyperlink. That is,
        // a link between one HTML document and another, or between one location inside an HTML document and another
        // location inside the same document.
        'jsx-a11y/anchor-is-valid': 'error',

        // ✅ jsx-a11y/aria-activedescendant-has-tabindex
        // Enforce elements with `aria-activedescendant` are tabbable.
        'jsx-a11y/aria-activedescendant-has-tabindex': 'error',

        // ✅ jsx-a11y/aria-props
        // Enforces that elements do not use invalid ARIA attributes.
        'jsx-a11y/aria-props': 'error',

        // ✅ jsx-a11y/aria-proptypes
        // Enforces that elements do not use invalid ARIA state and property values.
        'jsx-a11y/aria-proptypes': 'error',

        // ✅ jsx-a11y/aria-role
        // Elements with ARIA roles must use a valid, non-abstract ARIA role.
        'jsx-a11y/aria-role': 'error',


        // ✅ jsx-a11y/aria-unsupported-elements
        // Enforces that reserved DOM elements do not contain ARIA roles, states, or properties.
        'jsx-a11y/aria-unsupported-elements': 'error',

        // ✅ jsx-a11y/autocomplete-valid
        // Enforces that an element's `autocomplete` attribute must be a valid value.
        'jsx-a11y/autocomplete-valid': 'error',

        // ✅ jsx-a11y/click-events-have-key-events
        // Enforce `onClick` is accompanied by at least one of the following: `onKeyUp`, `onKeyDown`, `onKeyPress`.
        'jsx-a11y/click-events-have-key-events': 'error',

        // ✅ jsx-a11y/control-has-associated-label
        // Enforce that a control (an interactive element) has a text label.
        'jsx-a11y/control-has-associated-label': 'error',

        // ✅ jsx-a11y/heading-has-content
        // Enforce that heading elements (`h1`, `h2`, etc.) have content and that the content is accessible to screen
        // readers.
        'jsx-a11y/heading-has-content': 'error',

        // ✅ jsx-a11y/html-has-lang
        // Ensures that every HTML document has a `lang` attribute.
        'jsx-a11y/html-has-lang': 'error',

        // ✅ jsx-a11y/iframe-has-title
        // Enforce iframe elements have a `title` attribute.
        'jsx-a11y/iframe-has-title': 'error',

        // ✅ jsx-a11y/img-redundant-alt
        // Enforce that img `alt` attributes do not contain redundant words like "image", "picture", or "photo".
        'jsx-a11y/img-redundant-alt': 'error',

        // ✅ jsx-a11y/interactive-supports-focus
        // Enforce that elements with interactive roles and interaction handlers (mouse or key press) must be focusable.
        'jsx-a11y/interactive-supports-focus': 'error',

        // ✅ jsx-a11y/label-has-associated-control
        // Enforce that a label tag has a text label and an associated control.
        'jsx-a11y/label-has-associated-control': 'error',

        // ✅ jsx-a11y/lang
        // The `lang` prop on the `html` element must be a valid IETF BCP 47 language tag.
        'jsx-a11y/lang': 'error',

        // ✅ jsx-a11y/media-has-caption
        // Checks if `audio` and `video` elements have a `track` element for captions.
        'jsx-a11y/media-has-caption': 'error',

        // ✅ jsx-a11y/mouse-events-have-key-events
        // Enforce `onMouseOver`/`onMouseOut` are accompanied by `onFocus`/`onBlur`.
        'jsx-a11y/mouse-events-have-key-events': 'error',

        // ✅ jsx-a11y/no-access-key
        // Enforces that the `accessKey` prop is not used on any element.
        'jsx-a11y/no-access-key': 'error',

        // ✅ jsx-a11y/no-aria-hidden-on-focusable
        // Enforces that `aria-hidden="true"` is not set on focusable elements.
        'jsx-a11y/no-aria-hidden-on-focusable': 'error',

        // ✅ jsx-a11y/no-autofocus
        // Enforce that `autoFocus` prop is not used on elements.
        'jsx-a11y/no-autofocus': 'error',

        // ✅ jsx-a11y/no-distracting-elements
        // Enforces that no distracting elements are used.
        'jsx-a11y/no-distracting-elements': 'error',

        // ✅ jsx-a11y/no-interactive-element-to-noninteractive-role
        // Interactive HTML elements indicate controls in the user interface.
        'jsx-a11y/no-interactive-element-to-noninteractive-role': 'error',

        // ✅ jsx-a11y/no-noninteractive-element-interactions
        // Prevents non-interactive HTML elements and elements with non-interactive ARIA roles from being assigned mouse or
        // keyboard event handlers.
        'jsx-a11y/no-noninteractive-element-interactions': 'error',

        // ✅ jsx-a11y/no-noninteractive-element-to-interactive-role
        // Non-interactive HTML elements indicate content and containers in the user interface.
        'jsx-a11y/no-noninteractive-element-to-interactive-role': 'error',

        // ✅ jsx-a11y/no-noninteractive-tabindex
        // This rule checks that non-interactive elements don't have a `tabIndex` which would make them interactive via
        // keyboard navigation.
        'jsx-a11y/no-noninteractive-tabindex': 'error',

        // ✅ jsx-a11y/no-redundant-roles
        // Enforces that code does not include a redundant role property, in the case that it's identical to the implicit
        // role property of the element type.
        'jsx-a11y/no-redundant-roles': 'error',

        // ✅ jsx-a11y/no-static-element-interactions
        // Enforces that static HTML elements with event handlers must have appropriate ARIA roles.
        'jsx-a11y/no-static-element-interactions': 'error',

        // ✅ jsx-a11y/prefer-tag-over-role
        // Enforces using semantic HTML tags over `role` attribute.
        'jsx-a11y/prefer-tag-over-role': 'error',

        // ✅ jsx-a11y/role-has-required-aria-props
        // Enforces that elements with ARIA roles must have all required attributes for that role.
        'jsx-a11y/role-has-required-aria-props': 'error',

        // ✅ jsx-a11y/role-supports-aria-props
        // Enforce that elements with explicit or implicit roles defined contain only `aria-*` properties supported by that
        // role.
        'jsx-a11y/role-supports-aria-props': 'error',

        // ✅ jsx-a11y/scope
        // The scope prop should be used only on `<th>` elements.
        'jsx-a11y/scope': 'error',

        // ✅ jsx-a11y/tabindex-no-positive
        // Enforces that positive values for the `tabIndex` attribute are not used in JSX.
        'jsx-a11y/tabindex-no-positive': 'error',
    }
} satisfies OxlintConfig;