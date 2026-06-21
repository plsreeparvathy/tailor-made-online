# Build the TailorMade Google Form

## Got "No item with the given ID could be found"?

That means **script.google.com is signed into a different Google account** than the one that owns the form (or you don't have Edit access).

**Fix — use one of these instead:**

---

### Option A — Easiest (recommended)

1. Open **[script.google.com](https://script.google.com)** (any account you want to own the form).
2. New project → paste `build-tailormade-google-form.gs`.
3. Select function **`createNewEnquiryForm`** → **Run** → allow permissions.
4. Check **Execution log** for the new **Public** link — use that on your website.

This creates a fresh form in your Drive. Ignore the old blank form.

---

### Option B — Update your existing form

1. Open your form in edit mode:
   `https://docs.google.com/forms/d/1I3JGfhNvAwUzWCl8Spzp3i_K_p5bnM_JmO5zsA_XjmY/edit`
2. Top-right **⋮** → **Script editor** (or **Extensions → Apps Script**).
3. Paste `build-tailormade-google-form.gs` → save.
4. Select **`buildFromActiveForm`** → **Run** → allow permissions.
5. Refresh the form tab — questions should appear.

Because the script runs *inside* the form, there are no permission issues.

---

### Option C — Same account on script.google.com

Only use **`buildTailorMadeEnquiryForm`** if script.google.com uses the **exact same Google account** that created the form.

---

## After the form is built

1. Open the form → **Responses** tab → **Link to Sheets** → create spreadsheet.
2. Copy the **Public** link from the logs (ends in `/viewform`) for your website.

## Re-run safely

The script clears existing questions before adding new ones.
