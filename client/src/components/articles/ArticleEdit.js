import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { GET_ARTICLE, UPDATE_ARTICLE, GET_ARTICLES } from '../../graphql/articleQueries';

function ArticleEdit(props) {
  function handleCancel(props) {
    props.history.push(`/articles/${props.match.params._id}`);
  }

  let title, content;
  return (
    <Query query={GET_ARTICLE} variables={{ id: props.match.params._id }}>
      {function({ loading, error, data }) {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        const { article } = data;
        return (
          <div>
            <h1>Edit {article.title}</h1>
            <Mutation mutation={UPDATE_ARTICLE}>
              {function(updateArticle, { data }) { 
                return( 
                  <div>
                    <form
                      onSubmit={function(event) {
                        event.preventDefault();
                        title = title.value ? title.value : article.title; 
                        content = content.value ? content.value : article.content;
                        updateArticle({
                          variables: {
                            id: article.id,
                            title: title,
                            content: content
                          },
                          refetchQueries: [{query: GET_ARTICLES}]
                        });
                        props.history.push(`/articles/${article.id}`);
                      }}
                    >
                      <div className="form-group">
                        <label>Title</label>
                        <input type="text" name="title" className="form-control"
                          defaultValue={article.title} 
                          ref={function(node) { return title = node; }} />
                      </div>
                      <div className="form-group">
                        <label>Content</label>
                        <textarea name="content" rows="5" className="form-control"
                          defaultValue={article.content} 
                          ref={function(node) { return content = node; }} />
                      </div>
                      <div className="btn-group">
                        <button type="submit" className="btn btn-primary">Update</button>
                        <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
                      </div>
                    </form>
                  </div>
                )
              }}
            </Mutation>
          </div>
        );
      }}
    </Query>      
  )
}

export default ArticleEdit;