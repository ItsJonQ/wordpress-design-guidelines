# Deploys

This project is built and hosted using [Netlify](https://www.netlify.com/).

Anytime a change happens on the `master` branch (either a push or a merge), it automatically triggers a Netlify deploy. If the build is successful, the change will be reflected on [https://wp-design-guidelines.netlify.com/](https://wp-design-guidelines.netlify.com/).

## Deploy Previews

Anytime a [pull request](https://github.com/itsjonq/wordpress-design-guidelines/pulls) is **made** or **updated**, Netlify will automatically create a dedicated preview for that pull request. How cool is that?!

The URL will typically look something like this:

[https://deploy-preview-1--wordpress-design-guidelines.netlify.com/](https://deploy-preview-1--wordpress-design-guidelines.netlify.com/)

Any changes in the pull request will trigger a rebuild, which will be reflected in the URL generated for that specific pull request.
