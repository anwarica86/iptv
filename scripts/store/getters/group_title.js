module.exports = function () {
  if (this.group_title !== undefined) return this.group_title

  if (Array.isArray(this.categories) && this.categories.length) {
    return this.categories
      .map(i => i.name)
      .sort()
      .join(';')
  }

  return 'Undefined'
}
