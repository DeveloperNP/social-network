import profileReducer, { actions } from './profile-reducer'

let state = {
  posts: [
    { id: 1, message: 'Forza Milan!!!', likesCount: 1899 },
    { id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fugiat ratione, deserunt delectus doloribus rerum. Veniam, facilis modi. Dolorem necessitatibus soluta a cumque eveniet nulla dolores consectetur. Quibusdam, perferendis suscipit!', likesCount: 508 },
    { id: 3, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fugiat ratione, deserunt delectus doloribus rerum. Veniam, facilis modi. Dolorem necessitatibus soluta a cumque eveniet nulla dolores consectetur. Quibusdam, perferendis suscipit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fugiat ratione, deserunt delectus doloribus rerum. Veniam, facilis modi. Dolorem necessitatibus soluta a cumque eveniet nulla dolores consectetur. Quibusdam, perferendis suscipit!', likesCount: 287 },
    { id: 4, message: 'The weather is fine today', likesCount: 35 },
    { id: 5, message: 'How are you?', likesCount: 58 },
    { id: 6, message: 'Hello, World! This is my first post ^.^', likesCount: 104 }
  ]
}

test('new post should be added', () => {
  // 1. test data
  let action = actions.addPost('test message')

  // 2. some action
  let newState = profileReducer(state, action)

  // 3. expectation
  expect(newState.posts.length).toBe(7)
})

test('new post message should be correct', () => {
  // 1. test data
  let action = actions.addPost('test message')

  // 2. some action
  let newState = profileReducer(state, action)

  // 3. expectation
  expect(newState.posts[6].message).toBe('test message')
})

test('post should be deleted', () => {
  // 1. test data
  let action = actions.deletePost(1)

  // 2. some action
  let newState = profileReducer(state, action)

  // 3. expectation
  expect(newState.posts.length).toBe(5)
})

test(`post shouldn't be deleted (incorrect id to delete)`, () => {
  // 1. test data
  let action = actions.deletePost(1000)

  // 2. some action
  let newState = profileReducer(state, action)

  // 3. expectation
  expect(newState.posts.length).toBe(6)
})