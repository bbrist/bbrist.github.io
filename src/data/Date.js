// eslint-disable-next-line max-classes-per-file
export class Period {
  constructor(start, end = undefined) {
    this.start = start;
    this.end = end;
  }

  isPresent() {
    return this.end === undefined;
  }

  toString() {
    if (this.isPresent()) {
      return `${this.start.toString()} - present`;
    }

    return `${this.start.toString()} - ${this.end.toString()}`;
  }
}

export class Date {
  constructor(year, month = '', day = '') {
    this.year = `${year}`;
    this.month = `${month}`;
    this.day = `${day}`;
  }

  toString() {
    if (this.month === '') {
      return `${this.year}`;
    }

    if (this.day === '') {
      return `${this.month} ${this.year}`;
    }

    return `${this.day} ${this.month} ${this.year}`;
  }

  static period(start, end = undefined) {
    const s = Date.parse(start);
    const e = Date.parse(end);

    return new Period(s, e);
  }

  static parse(arg) {
    const type = typeof arg;
    switch (type) {
      case 'number':
      case 'string':
        return new Date(arg);
      case 'object':
      default:
        return arg;
    }
  }
}

export default Date;
