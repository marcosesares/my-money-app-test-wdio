import { HtmlHelper } from "./html-helper";

export function xpath(tag) {
  return new XpathBuilder(tag);
}

const TEXT_TO_BE_REPLACED = "TEXT_TO_BE_REPLACED";

export class XpathBuilder {
  constructor(tag = HtmlHelper.tags.any) {
    this._item = `//${tag}`;
  }

  _item;

  get item() {
    return this._item;
  }

  set item(value) {
    this._item = value;
  }

  where(attr, value) {
    this._item += value ? `[@${attr}="${value}"]` : `[@${attr}]`;
    return this;
  }

  not() {
    this._item += `[not(${TEXT_TO_BE_REPLACED})]`;
    return this;
  }

  contains(attr, value, insideNot = false) {
    const locator = `[contains(@${attr},"${value}")]`;
    if (insideNot) {
      this._item = this._item.replace(
        TEXT_TO_BE_REPLACED,
        locator.substring(1, locator.length - 1)
      );
    } else {
      this._item += locator;
    }
    return this;
  }

  startsWith(attr, value) {
    this._item += `[starts-with(@${attr},"${value}")]`;
    return this;
  }

  endsWith(attr, value) {
    this._item += `[ends-with(@${attr},${value})]`;
    return this;
  }

  ancestor(tag) {
    this._item += `/ancestor::${tag}`;
    return this;
  }

  goToParent(times = 1) {
    while (times-- > 0) {
      this._item += "/..";
    }
    return this;
  }

  parent(tag) {
    this._item += `/parent::${tag}`;
    return this;
  }

  followingSibling(tag) {
    this._item += `/following-sibling::${tag}`;
    return this;
  }

  precendingSibling(tag) {
    this._item += `/preceding-sibling::${tag}`;
    return this;
  }

  count() {
    this._item = `count(${this._item})`;
    return this;
  }

  normalizedSpace(attr, value) {
    this._item += `[normalize-space(@${attr})="${value}"]`;
    return this;
  }

  text(value) {
    this._item += `[text()="${value}"]`;
    return this;
  }

  textContains(value) {
    this._item += `[contains(text(),"${value}")]`;
    return this;
  }

  textContainsOr(values) {
    const text = [];
    values.map((value) => text.push(`contains(text(),"${value}")`));
    this._item += `[${text.join(" or ")}]`;
    return this;
  }

  descendant(tag) {
    this._item += `/${tag}`;
    return this;
  }

  anywhere(tag) {
    this._item += `//${tag}`;
    return this;
  }

  or(xpaths) {
    this._item += xpaths.join(" or ");
    return this;
  }

  and(xpaths) {
    this._item += xpaths.join(" and ");
    return this;
  }

  first() {
    this._item = `(${this._item})[1]`;
    return this;
  }

  last() {
    this._item = `(${this._item})[last()]`;
    return this;
  }

  nthChild(index) {
    this._item = `(${this._item})[${index}]`;
    return this;
  }

  odd() {
    this._item = `(${this._item})[position() mod 2 = 1 and position() > 0]`;
    return this;
  }

  build() {
    return this._item;
  }
}
