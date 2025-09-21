function productApp() {
  return {
    count: 0,
    products: [],
    loading: false,
    // comments state
    comments: [],
    showForm: false,
    commentName: '',
    commentText: '',
    async fetchProducts() {
      this.loading = true;
      try {
        const res = await fetch('/api/products');
        if (!res.ok) throw new Error('Network error');
        this.products = await res.json();
      } catch (e) {
        console.error(e);
        this.products = [];
      } finally {
        this.loading = false;
      }
    }
    ,
    async fetchComments() {
      try {
        const res = await fetch('/api/comments');
        if (!res.ok) throw new Error('Network error');
        this.comments = await res.json();
      } catch (e) {
        console.error(e);
        this.comments = [];
      }
    },
    async postComment() {
      if (!this.commentText.trim()) return;
      try {
        const res = await fetch('/api/comments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: this.commentName, text: this.commentText })
        });
        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          throw new Error(err.error || 'Failed to post');
        }
        this.commentText = '';
        this.commentName = '';
        await this.fetchComments();
      } catch (e) {
        console.error(e);
        alert('Failed to post comment');
      }
    },
    // initialize
    init() {
      this.fetchComments();
    }
  }
}
