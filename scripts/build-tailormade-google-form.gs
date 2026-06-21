/**
 * TailorMade Online — Google Form builder
 *
 * HOW TO RUN (pick ONE):
 *
 * A) createNewEnquiryForm          ← easiest; always works (creates a new form)
 * B) buildFromActiveForm           ← open your form → ⋮ → Script editor → run this
 * C) buildTailorMadeEnquiryForm    ← only if script.google.com uses the SAME account as form owner
 */

const FORM_ID = "1I3JGfhNvAwUzWCl8Spzp3i_K_p5bnM_JmO5zsA_XjmY";

/**
 * RECOMMENDED — Creates a brand-new form in your Drive. No permission issues.
 * Run from https://script.google.com (any account you want to own the form).
 */
function createNewEnquiryForm() {
  const form = FormApp.create("TailorMade Online — Enquiry Form");
  populateForm(form);
  logFormLinks(form, "Created new form");
}

/**
 * Use when the script is opened FROM the form (container-bound).
 * 1. Open your form in edit mode
 * 2. ⋮ (top right) → Script editor  (or Extensions → Apps Script)
 * 3. Paste this file → run buildFromActiveForm
 */
function buildFromActiveForm() {
  const form = FormApp.getActiveForm();
  if (!form) {
    throw new Error(
      "No active form. Open the form → ⋮ → Script editor, paste this code there, then run buildFromActiveForm."
    );
  }
  clearFormItems(form);
  populateForm(form);
  logFormLinks(form, "Updated active form");
}

/**
 * Updates the existing form by ID. Fails if wrong Google account or no edit access.
 */
function buildTailorMadeEnquiryForm() {
  const form = openFormByIdOrExplain(FORM_ID);
  clearFormItems(form);
  populateForm(form);
  logFormLinks(form, "Updated form " + FORM_ID);
}

function openFormByIdOrExplain(formId) {
  try {
    const file = DriveApp.getFileById(formId);
    const mime = file.getMimeType();

    if (mime !== MimeType.GOOGLE_FORMS) {
      throw new Error(
        "That ID is not a Google Form (found: " + mime + "). Check the URL."
      );
    }

    Logger.log("Found: " + file.getName());
    return FormApp.openById(formId);
  } catch (error) {
    const message =
      "Cannot open form " +
      formId +
      ".\n\n" +
      "This usually means:\n" +
      "  • script.google.com is signed into a DIFFERENT Google account than the form owner\n" +
      "  • The form was deleted or the link is wrong\n" +
      "  • You only have View access, not Edit\n\n" +
      "Fix options:\n" +
      "  1. EASIEST: Run createNewEnquiryForm() instead (makes a fresh form)\n" +
      "  2. Open the form → ⋮ → Script editor → run buildFromActiveForm()\n" +
      "  3. Share the form with your script account as Editor, then retry\n\n" +
      "Original error: " +
      error.message;

    Logger.log(message);
    throw new Error(message);
  }
}

function clearFormItems(form) {
  form.getItems().forEach(function (item) {
    form.deleteItem(item);
  });
}

function populateForm(form) {
  form.setTitle("TailorMade Online — Enquiry Form");
  form.setDescription(
    "Tell us about your label idea. Our team will get in touch to help you curate and create your own ethnic wear collection."
  );
  form.setConfirmationMessage(
    "Thank you! Our team will get in touch with you shortly."
  );
  form.setCollectEmail(true);
  form.setAllowResponseEdits(false);
  form.setLimitOneResponsePerUser(false);

  form
    .addTextItem()
    .setTitle("Full Name")
    .setHelpText("Your full name")
    .setRequired(true);

  form
    .addTextItem()
    .setTitle("Brand / Boutique Name")
    .setHelpText("Optional — leave blank if you don't have one yet")
    .setRequired(false);

  form
    .addTextItem()
    .setTitle("Phone Number")
    .setHelpText("Include country code if outside India, e.g. +91 98765 43210")
    .setRequired(true);

  form.addTextItem().setTitle("Email").setRequired(true);

  form
    .addTextItem()
    .setTitle("City & State")
    .setHelpText("e.g. Bengaluru, Karnataka")
    .setRequired(true);

  form
    .addCheckboxItem()
    .setTitle("Are You")
    .setHelpText("Select all that apply")
    .setChoiceValues([
      "Fashion Designer",
      "Boutique Owner",
      "Fashion Entrepreneur",
      "Retail Brand",
      "Startup Label",
    ])
    .showOtherOption(true)
    .setRequired(true);

  form
    .addMultipleChoiceItem()
    .setTitle("Do you have a registered brand?")
    .setChoiceValues(["Yes", "No"])
    .setRequired(true);

  form
    .addCheckboxItem()
    .setTitle("Product Types")
    .setHelpText("Select all product types you're interested in")
    .setChoiceValues([
      "Kurtis",
      "Co-ord Sets",
      "Dresses",
      "Tops",
      "Tunics",
      "Kidswear",
      "Menswear",
    ])
    .showOtherOption(true)
    .setRequired(true);

  form
    .addTextItem()
    .setTitle("How many styles are you planning?")
    .setHelpText("Optional — enter a number")
    .setRequired(false);

  form
    .addMultipleChoiceItem()
    .setTitle("Expected Quantity")
    .setChoiceValues([
      "100 Pieces",
      "100–250 Pieces",
      "250–500 Pieces",
      "500+ Pieces",
    ])
    .setRequired(true);

  form
    .addTextItem()
    .setTitle("How many colours per style?")
    .setHelpText("Optional — enter a number")
    .setRequired(false);

  form
    .addCheckboxItem()
    .setTitle("Design Assets available")
    .setHelpText("Select all that you have ready")
    .setChoiceValues(["Design Sketches", "Reference Images", "Tech Pack"])
    .setRequired(false);
}

function logFormLinks(form, label) {
  Logger.log("=== " + label + " ===");
  Logger.log("Edit:   " + form.getEditUrl());
  Logger.log("Public: " + form.getPublishedUrl());
  Logger.log("Copy the PUBLIC link for your website.");
}
