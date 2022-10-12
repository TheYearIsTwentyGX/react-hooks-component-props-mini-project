import react from "react";
import Article from "./Article"

function ArticleList({posts}) {
    const articleList = posts.map(x => (<Article key={x.id} date={x.date} preview={x.preview} title={x.title}/>));
    return (
        <main>
            {articleList}
        </main>
    )
}

export default ArticleList