---
title: API Reference

language_tabs:
- bash
- javascript

includes:

search: true

toc_footers:
- <a href='http://github.com/mpociot/documentarian'>Documentation Powered by Documentarian</a>
---
<!-- START_INFO -->
# Info

Welcome to the generated API reference.
[Get Postman Collection](http://localhost:8000/docs/collection.json)

<!-- END_INFO -->

#general


<!-- START_0243e324e32b67b8af814736702d84a1 -->
## Display a listing of the resource.

> Example request:

```bash
curl -X GET \
    -G "http://localhost:8000/api/threads" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/api/threads"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
{
    "data": [
        {
            "id": 25,
            "title": "Lorem ipsum dolor sit amet",
            "slug": "lorem-ipsum-dolor-sit-amet",
            "content": "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
            "user_id": "44",
            "category_id": "3",
            "best_reply_id": null,
            "visits_count": "14",
            "created_at": "2019-12-11 13:14:22",
            "updated_at": "2019-12-17 12:33:09",
            "replies_count": "1",
            "likes_count": "0",
            "ago": "1 month ago",
            "is_liked": false,
            "is_resolved": false,
            "category": {
                "id": 3,
                "name": "natus",
                "slug": "natus",
                "created_at": "2019-12-10 11:34:16",
                "updated_at": "2019-12-10 11:34:16"
            },
            "creator": {
                "id": 44,
                "name": "Peter Doe",
                "email": "peter@example.com",
                "profile_picture": "R2QOB24DqKnJhVqWLbpj2tkikrHGzFetBjTElSDl.png",
                "avatar_link": "http:\/\/localhost:8000\/storage\/avatars\/R2QOB24DqKnJhVqWLbpj2tkikrHGzFetBjTElSDl.png"
            }
        },
        {
            "id": 24,
            "title": "Lorem ipsum dolor sit amet",
            "slug": "lorem-ipsum-dolor-sit-amet",
            "content": "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
            "user_id": "44",
            "category_id": "2",
            "best_reply_id": null,
            "visits_count": "13",
            "created_at": "2019-12-11 13:13:43",
            "updated_at": "2019-12-11 13:23:15",
            "replies_count": "0",
            "likes_count": "1",
            "ago": "1 month ago",
            "is_liked": false,
            "is_resolved": false,
            "category": {
                "id": 2,
                "name": "numquam",
                "slug": "numquam",
                "created_at": "2019-12-10 11:34:16",
                "updated_at": "2019-12-10 11:34:16"
            },
            "creator": {
                "id": 44,
                "name": "Peter Doe",
                "email": "peter@example.com",
                "profile_picture": "R2QOB24DqKnJhVqWLbpj2tkikrHGzFetBjTElSDl.png",
                "avatar_link": "http:\/\/localhost:8000\/storage\/avatars\/R2QOB24DqKnJhVqWLbpj2tkikrHGzFetBjTElSDl.png"
            }
        },
        {
            "id": 23,
            "title": "What's new in Java 8",
            "slug": "whats-new-in-java-8",
            "content": "Sed porttitor lectus nibh. Sed porttitor lectus nibh. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus.\n\nDonec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
            "user_id": "43",
            "category_id": "4",
            "best_reply_id": "25",
            "visits_count": "13",
            "created_at": "2019-12-11 12:48:45",
            "updated_at": "2019-12-11 13:05:11",
            "replies_count": "3",
            "likes_count": "0",
            "ago": "1 month ago",
            "is_liked": false,
            "is_resolved": true,
            "category": {
                "id": 4,
                "name": "eum",
                "slug": "eum",
                "created_at": "2019-12-10 11:34:16",
                "updated_at": "2019-12-10 11:34:16"
            },
            "creator": {
                "id": 43,
                "name": "Juvenal Pengele",
                "email": "juvenalpengele@gmail.com",
                "profile_picture": "8gzV0wDMYvU0tVCdNf0AhVHPq4xxlMT6qFnO8a8d.png",
                "avatar_link": "http:\/\/localhost:8000\/storage\/avatars\/8gzV0wDMYvU0tVCdNf0AhVHPq4xxlMT6qFnO8a8d.png"
            }
        },
        {
            "id": 22,
            "title": "how to use append in PHP ?",
            "slug": "how-to-use-append-in-php",
            "content": "Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
            "user_id": "42",
            "category_id": "2",
            "best_reply_id": "31",
            "visits_count": "16",
            "created_at": "2019-12-11 12:41:43",
            "updated_at": "2019-12-17 12:08:44",
            "replies_count": "3",
            "likes_count": "3",
            "ago": "1 month ago",
            "is_liked": false,
            "is_resolved": true,
            "category": {
                "id": 2,
                "name": "numquam",
                "slug": "numquam",
                "created_at": "2019-12-10 11:34:16",
                "updated_at": "2019-12-10 11:34:16"
            },
            "creator": {
                "id": 42,
                "name": "Jane Doe",
                "email": "john@example.com",
                "profile_picture": "yjtnXF50kWeM5F89qGaGwRZv6S7GDFatPWTUDeZO.png",
                "avatar_link": "http:\/\/localhost:8000\/storage\/avatars\/yjtnXF50kWeM5F89qGaGwRZv6S7GDFatPWTUDeZO.png"
            }
        },
        {
            "id": 21,
            "title": "What's new in PHP 7.4",
            "slug": "whats-new-in-php-74",
            "content": "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.",
            "user_id": "41",
            "category_id": "3",
            "best_reply_id": "22",
            "visits_count": "12",
            "created_at": "2019-12-10 13:27:01",
            "updated_at": "2019-12-11 12:58:50",
            "replies_count": "1",
            "likes_count": "3",
            "ago": "1 month ago",
            "is_liked": false,
            "is_resolved": true,
            "category": {
                "id": 3,
                "name": "natus",
                "slug": "natus",
                "created_at": "2019-12-10 11:34:16",
                "updated_at": "2019-12-10 11:34:16"
            },
            "creator": {
                "id": 41,
                "name": "John Doez",
                "email": "john@example.fr",
                "profile_picture": "jQ16sR65GZ1cpsem5rzsQNVzXvMpwyjIgsCnLSWP.png",
                "avatar_link": "http:\/\/localhost:8000\/storage\/avatars\/jQ16sR65GZ1cpsem5rzsQNVzXvMpwyjIgsCnLSWP.png"
            }
        },
        {
            "id": 18,
            "title": "Dolor vitae omnis facere placeat.",
            "slug": "dolor-vitae-omnis-facere-placeat",
            "content": "Vel exercitationem sed molestias nisi sed. Labore in quam aut sunt cumque. Vero consequatur sit fugiat culpa. Dolores voluptatem fugit quis et totam.",
            "user_id": "18",
            "category_id": "3",
            "best_reply_id": null,
            "visits_count": "43",
            "created_at": "2019-12-10 11:34:21",
            "updated_at": "2019-12-10 11:35:49",
            "replies_count": "1",
            "likes_count": "0",
            "ago": "1 month ago",
            "is_liked": false,
            "is_resolved": false,
            "category": {
                "id": 3,
                "name": "natus",
                "slug": "natus",
                "created_at": "2019-12-10 11:34:16",
                "updated_at": "2019-12-10 11:34:16"
            },
            "creator": {
                "id": 18,
                "name": "Mr. Alf Hessel",
                "email": "jheller@example.net",
                "profile_picture": "default.png",
                "avatar_link": "http:\/\/localhost:8000\/storage\/avatars\/default.png"
            }
        },
        {
            "id": 19,
            "title": "Odio nesciunt quia ipsam.",
            "slug": "odio-nesciunt-quia-ipsam",
            "content": "Cum et labore ut omnis eum rerum consectetur. Autem qui rerum beatae nulla itaque. Officiis perspiciatis odit ut et. Praesentium est officiis velit maxime aut hic dicta.",
            "user_id": "19",
            "category_id": "1",
            "best_reply_id": null,
            "visits_count": "42",
            "created_at": "2019-12-10 11:34:21",
            "updated_at": "2019-12-10 11:34:21",
            "replies_count": "1",
            "likes_count": "0",
            "ago": "1 month ago",
            "is_liked": false,
            "is_resolved": false,
            "category": {
                "id": 1,
                "name": "optio",
                "slug": "optio",
                "created_at": "2019-12-10 11:34:16",
                "updated_at": "2019-12-10 11:34:16"
            },
            "creator": {
                "id": 19,
                "name": "Carson Walker",
                "email": "gbashirian@example.net",
                "profile_picture": "default.png",
                "avatar_link": "http:\/\/localhost:8000\/storage\/avatars\/default.png"
            }
        },
        {
            "id": 20,
            "title": "Quae magni esse ipsum non sed accusamus.",
            "slug": "quae-magni-esse-ipsum-non-sed-accusamus",
            "content": "Eum a id et in. Repudiandae libero maxime provident iusto tenetur itaque eum hic.",
            "user_id": "20",
            "category_id": "5",
            "best_reply_id": null,
            "visits_count": "13",
            "created_at": "2019-12-10 11:34:21",
            "updated_at": "2019-12-11 12:59:03",
            "replies_count": "3",
            "likes_count": "2",
            "ago": "1 month ago",
            "is_liked": false,
            "is_resolved": false,
            "category": {
                "id": 5,
                "name": "quo",
                "slug": "quo",
                "created_at": "2019-12-10 11:34:16",
                "updated_at": "2019-12-10 11:34:16"
            },
            "creator": {
                "id": 20,
                "name": "Theo Glover III",
                "email": "botsford.justine@example.com",
                "profile_picture": "default.png",
                "avatar_link": "http:\/\/localhost:8000\/storage\/avatars\/default.png"
            }
        },
        {
            "id": 14,
            "title": "Et molestiae fugit doloribus.",
            "slug": "et-molestiae-fugit-doloribus",
            "content": "Praesentium fuga delectus qui. Asperiores tenetur expedita error sed reiciendis velit unde. Suscipit ut dolore et sed beatae consequatur inventore.",
            "user_id": "14",
            "category_id": "1",
            "best_reply_id": null,
            "visits_count": "23",
            "created_at": "2019-12-10 11:34:20",
            "updated_at": "2019-12-10 11:34:20",
            "replies_count": "1",
            "likes_count": "0",
            "ago": "1 month ago",
            "is_liked": false,
            "is_resolved": false,
            "category": {
                "id": 1,
                "name": "optio",
                "slug": "optio",
                "created_at": "2019-12-10 11:34:16",
                "updated_at": "2019-12-10 11:34:16"
            },
            "creator": {
                "id": 14,
                "name": "Stanford Swaniawski PhD",
                "email": "jweimann@example.org",
                "profile_picture": "default.png",
                "avatar_link": "http:\/\/localhost:8000\/storage\/avatars\/default.png"
            }
        },
        {
            "id": 15,
            "title": "Quis natus odit dicta.",
            "slug": "quis-natus-odit-dicta",
            "content": "Animi dolor saepe eius asperiores voluptatem. Aut nostrum inventore ut quo hic maxime. Omnis omnis perferendis dolores deserunt tempore aut. Iste sunt hic officiis et voluptas magni sequi.",
            "user_id": "15",
            "category_id": "1",
            "best_reply_id": null,
            "visits_count": "38",
            "created_at": "2019-12-10 11:34:20",
            "updated_at": "2019-12-17 12:36:46",
            "replies_count": "1",
            "likes_count": "0",
            "ago": "1 month ago",
            "is_liked": false,
            "is_resolved": false,
            "category": {
                "id": 1,
                "name": "optio",
                "slug": "optio",
                "created_at": "2019-12-10 11:34:16",
                "updated_at": "2019-12-10 11:34:16"
            },
            "creator": {
                "id": 15,
                "name": "Krystal Bins",
                "email": "lang.jaime@example.net",
                "profile_picture": "default.png",
                "avatar_link": "http:\/\/localhost:8000\/storage\/avatars\/default.png"
            }
        }
    ],
    "links": {
        "first": "http:\/\/localhost\/api\/threads?page=1",
        "last": "http:\/\/localhost\/api\/threads?page=3",
        "prev": null,
        "next": "http:\/\/localhost\/api\/threads?page=2"
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 3,
        "path": "http:\/\/localhost\/api\/threads",
        "per_page": 10,
        "to": 10,
        "total": 25
    }
}
```

### HTTP Request
`GET api/threads`


<!-- END_0243e324e32b67b8af814736702d84a1 -->

<!-- START_6a8687fad885c1393f9f9043b9fc0593 -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost:8000/api/threads" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/api/threads"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/threads`


<!-- END_6a8687fad885c1393f9f9043b9fc0593 -->

<!-- START_0e656c1442302e9aaa9c9c15504d2fcd -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X PUT \
    "http://localhost:8000/api/threads/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/api/threads/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT api/threads/{thread}`

`PATCH api/threads/{thread}`


<!-- END_0e656c1442302e9aaa9c9c15504d2fcd -->

<!-- START_b0a5a282469313ea475f38a96fe7df6d -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X DELETE \
    "http://localhost:8000/api/threads/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/api/threads/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE api/threads/{thread}`


<!-- END_b0a5a282469313ea475f38a96fe7df6d -->

<!-- START_109013899e0bc43247b0f00b67f889cf -->
## api/categories
> Example request:

```bash
curl -X GET \
    -G "http://localhost:8000/api/categories" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/api/categories"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
{
    "data": [
        {
            "id": 1,
            "name": "optio",
            "slug": "optio",
            "created_at": "2019-12-10 11:34:16",
            "updated_at": "2019-12-10 11:34:16",
            "threads_count": "6"
        },
        {
            "id": 2,
            "name": "numquam",
            "slug": "numquam",
            "created_at": "2019-12-10 11:34:16",
            "updated_at": "2019-12-10 11:34:16",
            "threads_count": "5"
        },
        {
            "id": 3,
            "name": "natus",
            "slug": "natus",
            "created_at": "2019-12-10 11:34:16",
            "updated_at": "2019-12-10 11:34:16",
            "threads_count": "6"
        },
        {
            "id": 4,
            "name": "eum",
            "slug": "eum",
            "created_at": "2019-12-10 11:34:16",
            "updated_at": "2019-12-10 11:34:16",
            "threads_count": "5"
        },
        {
            "id": 5,
            "name": "quo",
            "slug": "quo",
            "created_at": "2019-12-10 11:34:16",
            "updated_at": "2019-12-10 11:34:16",
            "threads_count": "3"
        }
    ]
}
```

### HTTP Request
`GET api/categories`


<!-- END_109013899e0bc43247b0f00b67f889cf -->

<!-- START_19d27ec976e7fe1de43b8e17470e87ef -->
## Display a listing of the resource.

> Example request:

```bash
curl -X GET \
    -G "http://localhost:8000/api/categories/1/posts" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/api/categories/1/posts"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (500):

```json
{
    "message": "Server Error"
}
```

### HTTP Request
`GET api/categories/{category}/posts`


<!-- END_19d27ec976e7fe1de43b8e17470e87ef -->

<!-- START_1c37ddbb3ab601696ef6a157ac7e0109 -->
## api/replies
> Example request:

```bash
curl -X POST \
    "http://localhost:8000/api/replies" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/api/replies"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/replies`


<!-- END_1c37ddbb3ab601696ef6a157ac7e0109 -->

<!-- START_af270374b7f3c5eb0d68e72de9b07158 -->
## api/replies/{reply}
> Example request:

```bash
curl -X PUT \
    "http://localhost:8000/api/replies/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/api/replies/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT api/replies/{reply}`


<!-- END_af270374b7f3c5eb0d68e72de9b07158 -->

<!-- START_2d415eef354b9f83750ca7357980572e -->
## api/replies/{reply}
> Example request:

```bash
curl -X DELETE \
    "http://localhost:8000/api/replies/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/api/replies/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE api/replies/{reply}`


<!-- END_2d415eef354b9f83750ca7357980572e -->

<!-- START_8f6420680bcd1fc35d5f310b71962c2f -->
## api/replies/{reply}/likes
> Example request:

```bash
curl -X POST \
    "http://localhost:8000/api/replies/1/likes" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/api/replies/1/likes"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/replies/{reply}/likes`


<!-- END_8f6420680bcd1fc35d5f310b71962c2f -->

<!-- START_9be57f9ba7484e852027aafc4055e559 -->
## api/replies/{reply}/likes
> Example request:

```bash
curl -X DELETE \
    "http://localhost:8000/api/replies/1/likes" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/api/replies/1/likes"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE api/replies/{reply}/likes`


<!-- END_9be57f9ba7484e852027aafc4055e559 -->

<!-- START_edbb02a1d5eed97dbaf7158b1725fdb1 -->
## Display the thread resource.

> Example request:

```bash
curl -X GET \
    -G "http://localhost:8000/api/1/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/api/1/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (404):

```json
{
    "message": "No query results for model [App\\Models\\Category] 1"
}
```

### HTTP Request
`GET api/{category}/{threadSlug}`


<!-- END_edbb02a1d5eed97dbaf7158b1725fdb1 -->

<!-- START_df22faf4569cb8ca708fdfe813bd404b -->
## api/{category}/{thread}/replies
> Example request:

```bash
curl -X GET \
    -G "http://localhost:8000/api/1/1/replies" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/api/1/1/replies"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (404):

```json
{
    "message": "No query results for model [App\\Models\\Thread] 1"
}
```

### HTTP Request
`GET api/{category}/{thread}/replies`


<!-- END_df22faf4569cb8ca708fdfe813bd404b -->

<!-- START_670c72dda8adc25cda63055175c18e11 -->
## api/{category}/{thread}/best-replies
> Example request:

```bash
curl -X POST \
    "http://localhost:8000/api/1/1/best-replies" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/api/1/1/best-replies"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/{category}/{thread}/best-replies`


<!-- END_670c72dda8adc25cda63055175c18e11 -->

<!-- START_0542ce21c19cc69c7fb445968e68e0bb -->
## api/{category}/{thread}/best-replies
> Example request:

```bash
curl -X DELETE \
    "http://localhost:8000/api/1/1/best-replies" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/api/1/1/best-replies"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE api/{category}/{thread}/best-replies`


<!-- END_0542ce21c19cc69c7fb445968e68e0bb -->

<!-- START_3e74099238ead461722e0ab321cc61cb -->
## api/{category}/{thread}/likes
> Example request:

```bash
curl -X POST \
    "http://localhost:8000/api/1/1/likes" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/api/1/1/likes"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/{category}/{thread}/likes`


<!-- END_3e74099238ead461722e0ab321cc61cb -->

<!-- START_a770f7190dbd47a6ce86e0150d692e42 -->
## api/{category}/{thread}/likes
> Example request:

```bash
curl -X DELETE \
    "http://localhost:8000/api/1/1/likes" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/api/1/1/likes"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE api/{category}/{thread}/likes`


<!-- END_a770f7190dbd47a6ce86e0150d692e42 -->

<!-- START_d7b7952e7fdddc07c978c9bdaf757acf -->
## api/register
> Example request:

```bash
curl -X POST \
    "http://localhost:8000/api/register" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/api/register"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/register`


<!-- END_d7b7952e7fdddc07c978c9bdaf757acf -->

<!-- START_c3fa189a6c95ca36ad6ac4791a873d23 -->
## Get a JWT via given credentials.

> Example request:

```bash
curl -X POST \
    "http://localhost:8000/api/login" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/api/login"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/login`


<!-- END_c3fa189a6c95ca36ad6ac4791a873d23 -->

<!-- START_61739f3220a224b34228600649230ad1 -->
## Log the user out (Invalidate the token).

> Example request:

```bash
curl -X POST \
    "http://localhost:8000/api/logout" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/api/logout"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/logout`


<!-- END_61739f3220a224b34228600649230ad1 -->

<!-- START_3fba263a38f92fde0e4e12f76067a611 -->
## Refresh a token.

> Example request:

```bash
curl -X POST \
    "http://localhost:8000/api/refresh" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/api/refresh"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/refresh`


<!-- END_3fba263a38f92fde0e4e12f76067a611 -->

<!-- START_d131f717df7db546af1657d1e7ce10f6 -->
## Get the authenticated User.

> Example request:

```bash
curl -X POST \
    "http://localhost:8000/api/me" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/api/me"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/me`


<!-- END_d131f717df7db546af1657d1e7ce10f6 -->

<!-- START_6d22dd2d61bc9bb01d0fee5b9b7d97d6 -->
## Update the authenticated avatar

> Example request:

```bash
curl -X POST \
    "http://localhost:8000/api/me/avatar" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/api/me/avatar"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/me/avatar`


<!-- END_6d22dd2d61bc9bb01d0fee5b9b7d97d6 -->

<!-- START_f8ac4b80a703f7e592ca48409acc2569 -->
## Remove the authenticated avatar

> Example request:

```bash
curl -X DELETE \
    "http://localhost:8000/api/me/avatar" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/api/me/avatar"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE api/me/avatar`


<!-- END_f8ac4b80a703f7e592ca48409acc2569 -->

<!-- START_eb4df49f5b2c6e502b30773ba0771ac7 -->
## api/me/personal-information
> Example request:

```bash
curl -X PUT \
    "http://localhost:8000/api/me/personal-information" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/api/me/personal-information"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT api/me/personal-information`


<!-- END_eb4df49f5b2c6e502b30773ba0771ac7 -->

<!-- START_ef1016d1344f223df5ec7a3e6861f374 -->
## api/me/password
> Example request:

```bash
curl -X PUT \
    "http://localhost:8000/api/me/password" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/api/me/password"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT api/me/password`


<!-- END_ef1016d1344f223df5ec7a3e6861f374 -->

<!-- START_66e08d3cc8222573018fed49e121e96d -->
## Show the application&#039;s login form.

> Example request:

```bash
curl -X GET \
    -G "http://localhost:8000/login" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/login"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
null
```

### HTTP Request
`GET login`


<!-- END_66e08d3cc8222573018fed49e121e96d -->

<!-- START_ba35aa39474cb98cfb31829e70eb8b74 -->
## Handle a login request to the application.

> Example request:

```bash
curl -X POST \
    "http://localhost:8000/login" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/login"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST login`


<!-- END_ba35aa39474cb98cfb31829e70eb8b74 -->

<!-- START_e65925f23b9bc6b93d9356895f29f80c -->
## Log the user out of the application.

> Example request:

```bash
curl -X POST \
    "http://localhost:8000/logout" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/logout"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST logout`


<!-- END_e65925f23b9bc6b93d9356895f29f80c -->

<!-- START_ff38dfb1bd1bb7e1aa24b4e1792a9768 -->
## Show the application registration form.

> Example request:

```bash
curl -X GET \
    -G "http://localhost:8000/register" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/register"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
null
```

### HTTP Request
`GET register`


<!-- END_ff38dfb1bd1bb7e1aa24b4e1792a9768 -->

<!-- START_d7aad7b5ac127700500280d511a3db01 -->
## Handle a registration request for the application.

> Example request:

```bash
curl -X POST \
    "http://localhost:8000/register" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/register"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST register`


<!-- END_d7aad7b5ac127700500280d511a3db01 -->

<!-- START_d72797bae6d0b1f3a341ebb1f8900441 -->
## Display the form to request a password reset link.

> Example request:

```bash
curl -X GET \
    -G "http://localhost:8000/password/reset" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/password/reset"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
null
```

### HTTP Request
`GET password/reset`


<!-- END_d72797bae6d0b1f3a341ebb1f8900441 -->

<!-- START_feb40f06a93c80d742181b6ffb6b734e -->
## Send a reset link to the given user.

> Example request:

```bash
curl -X POST \
    "http://localhost:8000/password/email" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/password/email"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST password/email`


<!-- END_feb40f06a93c80d742181b6ffb6b734e -->

<!-- START_e1605a6e5ceee9d1aeb7729216635fd7 -->
## Display the password reset view for the given token.

If no token is present, display the link request form.

> Example request:

```bash
curl -X GET \
    -G "http://localhost:8000/password/reset/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/password/reset/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
null
```

### HTTP Request
`GET password/reset/{token}`


<!-- END_e1605a6e5ceee9d1aeb7729216635fd7 -->

<!-- START_cafb407b7a846b31491f97719bb15aef -->
## Reset the given user&#039;s password.

> Example request:

```bash
curl -X POST \
    "http://localhost:8000/password/reset" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/password/reset"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST password/reset`


<!-- END_cafb407b7a846b31491f97719bb15aef -->

<!-- START_cb859c8e84c35d7133b6a6c8eac253f8 -->
## Show the application dashboard.

> Example request:

```bash
curl -X GET \
    -G "http://localhost:8000/home" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost:8000/home"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET home`


<!-- END_cb859c8e84c35d7133b6a6c8eac253f8 -->


