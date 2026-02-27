# Markdown & Typography Guide

This page demonstrates every markdown feature available for content pages. Each section shows the **raw markdown source** you'd write, followed by the **rendered output**.

## Headings

```markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

## Inline Formatting

```markdown
This has **bold text**, *italic text*, ***bold italic***, ~~strikethrough~~, and `inline code`.
```

This has **bold text**, *italic text*, ***bold italic***, ~~strikethrough~~, and `inline code`.

## Links

```markdown
An [internal link](/standards/sci/) and an [external link](https://github.com/Green-Software-Foundation).
```

An [internal link](/standards/sci/) and an [external link](https://github.com/Green-Software-Foundation).

## Unordered Lists

```markdown
- First item
- Second item
  - Nested item
  - Another nested item
    - Deeply nested
- Third item
```

- First item
- Second item
  - Nested item
  - Another nested item
    - Deeply nested
- Third item

## Ordered Lists

```markdown
1. Measure your software's carbon intensity
2. Identify the largest contributors
3. Apply green software patterns
   1. Optimise energy efficiency
   2. Shift workloads to low-carbon regions
   3. Reduce embodied carbon
4. Re-measure and track progress
```

1. Measure your software's carbon intensity
2. Identify the largest contributors
3. Apply green software patterns
   1. Optimise energy efficiency
   2. Shift workloads to low-carbon regions
   3. Reduce embodied carbon
4. Re-measure and track progress

## Task Lists (GFM)

```markdown
- [x] Install the Carbon Aware SDK
- [x] Configure regional carbon data sources
- [ ] Implement workload shifting logic
- [ ] Deploy to production
```

- [x] Install the Carbon Aware SDK
- [x] Configure regional carbon data sources
- [ ] Implement workload shifting logic
- [ ] Deploy to production

## Blockquotes

```markdown
> Software is not green by default. It takes intentional design,
> measurement, and continuous improvement.
```

> Software is not green by default. It takes intentional design, measurement, and continuous improvement.

### Nested Blockquote

```markdown
> The SCI specification provides a rate-based metric.
>
> > This means you can compare carbon efficiency
> > regardless of scale.
>
> That's what makes it actionable.
```

> The SCI specification provides a rate-based metric.
>
> > This means you can compare carbon efficiency regardless of scale.
>
> That's what makes it actionable.

## Code Blocks

### JavaScript

````markdown
```javascript
const sdk = new CarbonAwareSDK({ region: 'uk-south' });
const forecast = await sdk.getForecast({
  start: new Date(),
  end: new Date(Date.now() + 24 * 60 * 60 * 1000),
});
```
````

```javascript
const sdk = new CarbonAwareSDK({ region: 'uk-south' });
const forecast = await sdk.getForecast({
  start: new Date(),
  end: new Date(Date.now() + 24 * 60 * 60 * 1000),
});
```

### Python

````markdown
```python
def calculate_sci(energy_kwh, carbon_intensity, embodied, units):
    """SCI = ((E * I) + M) / R"""
    return (energy_kwh * carbon_intensity + embodied) / units
```
````

```python
def calculate_sci(energy_kwh, carbon_intensity, embodied, units):
    """SCI = ((E * I) + M) / R"""
    return (energy_kwh * carbon_intensity + embodied) / units
```

### Inline Code

```markdown
Run `npm install @carbon-aware/sdk` then use the `--carbon-aware` flag.
```

Run `npm install @carbon-aware/sdk` then use the `--carbon-aware` flag.

## Tables

```markdown
| Specification | Status    | ISO Reference       |
| ------------- | --------- | ------------------- |
| SCI           | Published | ISO/IEC 21031:2024  |
| SOFT          | Draft     | —                   |
| SCI for AI    | Draft     | —                   |
| WDPC          | Draft     | —                   |
```

| Specification | Status    | ISO Reference       |
| ------------- | --------- | ------------------- |
| SCI           | Published | ISO/IEC 21031:2024  |
| SOFT          | Draft     | —                   |
| SCI for AI    | Draft     | —                   |
| WDPC          | Draft     | —                   |

## Horizontal Rules

```markdown
Content above the rule.

---

Content below the rule.
```

Content above the rule.

---

Content below the rule.

## Images

### Standard Image

```markdown
![Green Software Foundation logo](/assets/gsf-logo-full.svg)
```

![Green Software Foundation logo](/assets/gsf-logo-full.svg)

### Full-Width Image

Breaks out of the prose column to span the full viewport width. Uses the `:::full-width` directive.

````markdown
:::full-width
![Wide illustration](/assets/hero-illustration.svg)
:::
````

:::full-width
![Wide illustration](/assets/hero-illustration.svg)
:::

### Float Right

A smaller image with text wrapping around it. Uses `:::float-right`.

````markdown
:::float-right
![GSF logo](/assets/gsf-logo-full.svg)
:::

The rest of this paragraph wraps around the image. This is useful
for author photos, small diagrams, or decorative elements...
````

:::float-right
![GSF logo](/assets/gsf-logo-full.svg)
:::

The rest of this paragraph wraps around the image. This is useful for author photos, small diagrams, or decorative elements that shouldn't interrupt the reading flow. The text continues to flow naturally around the floated image, creating a magazine-style layout. Once the text extends past the image, it returns to full width automatically.

### Float Left

Same as float right, but on the other side. Uses `:::float-left`.

````markdown
:::float-left
![GSF logo](/assets/gsf-logo-full.svg)
:::

Text wraps on the right side of the image...
````

:::float-left
![GSF logo](/assets/gsf-logo-full.svg)
:::

Text wraps on the right side of the image instead. This creates a different visual flow and can be alternated with float-right for variety in longer articles. The float clears once enough text has flowed past the image height, returning to normal full-width paragraphs.

### Side-by-Side Images

Two images displayed in columns using `:::columns`.

````markdown
:::columns
![First image](/assets/dive-illustration.svg)

![Second image](/assets/hero-illustration.svg)
:::
````

:::columns
![First image](/assets/dive-illustration.svg)

![Second image](/assets/hero-illustration.svg)
:::

### Figure with Caption

An image with an explicit caption (separate from alt text). Uses `:::figure{caption="..."}`.

````markdown
:::figure{caption="Source: IEA World Energy Outlook 2025"}
![Global energy consumption by sector](/assets/hero-illustration.svg)
:::
````

:::figure{caption="Source: IEA World Energy Outlook 2025"}
![Global energy consumption by sector](/assets/hero-illustration.svg)
:::

## Callout Blocks

Callout blocks highlight important information. They use the `:::note`, `:::warning`, and `:::tip` directives.

### Note

````markdown
:::note
This article was originally published on the AWS Sustainability Blog
and has been reproduced here with permission.
:::
````

:::note
This article was originally published on the AWS Sustainability Blog and has been reproduced here with permission.
:::

### Warning

````markdown
:::warning
The SCI score is a rate, not a total. Comparing SCI scores between
different software systems requires the same functional unit.
:::
````

:::warning
The SCI score is a rate, not a total. Comparing SCI scores between different software systems requires the same functional unit.
:::

### Tip

````markdown
:::tip
Use the Carbon Aware SDK to automatically shift batch workloads to
times when the grid is cleanest. This can reduce operational carbon
by 15–30% with no code changes to the workload itself.
:::
````

:::tip
Use the Carbon Aware SDK to automatically shift batch workloads to times when the grid is cleanest. This can reduce operational carbon by 15–30% with no code changes to the workload itself.
:::

## Putting It All Together

Here's what a realistic article section looks like combining multiple elements:

### Measuring Carbon at Scale

When Amadeus set out to measure the carbon impact of their flight search platform — processing **3 billion searches daily** — they needed a metric that engineering teams could act on.

> We tried total carbon footprint first, but the number was meaningless to individual teams. They couldn't connect their code changes to the overall figure.

The solution was SCI, which provides a **rate-based metric**:

```
SCI = ((E * I) + M) / R
```

:::tip
The SCI formula measures carbon per functional unit — for example, grams of CO2 per API request, per user, or per transaction.
:::

By measuring carbon *per search query*, teams could:

1. Set meaningful targets (e.g. "reduce SCI by 30%")
2. See the impact of specific optimisations
3. Compare different implementations objectively

| Optimisation | SCI Impact | Effort |
| --- | --- | --- |
| Query caching | -22% | Low |
| Region-aware routing | -15% | Medium |
| Hardware refresh cycle | -8% | High |

The results speak for themselves — within 18 months, Amadeus reduced their SCI score by **34%** across the platform.
