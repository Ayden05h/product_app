function liveApp() {
  const LS_KEY = 'product_app_comments_v1'
  const sampleProducts = [
    { id: 1, name: 'Widget', price: 9.99 },
    { id: 2, name: 'Gadget', price: 14.99 },
    { id: 3, name: 'Doohickey', price: 4.99 }
  ]

  function loadComments() {
    try {
      return JSON.parse(localStorage.getItem(LS_KEY) || '[]')
    } catch (e) { return [] }
  }

  return {
    count: 0,
    products: [],
    comments: loadComments(),
    showForm: false,
    commentName: '',
    commentText: '',
    loadProducts() {
      this.products = sampleProducts
    },
    postComment() {
      if (!this.commentText.trim()) return
      const c = {
        id: Date.now(),
        name: (this.commentName || 'Anonymous').trim() || 'Anonymous',
        text: this.commentText.trim(),
        created_at: new Date().toISOString()
      }
      this.comments.unshift(c)
      localStorage.setItem(LS_KEY, JSON.stringify(this.comments))
      this.commentText = ''
      this.commentName = ''
      this.showForm = false
    }
  }
}
