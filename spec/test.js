import {expect} from 'chai'
import sinon from 'sinon'
import * as hello from '../hello'
import * as core from '../core'

describe('sinon', function () {

    it('should replace an indirect used function by a stub', function () {
        sinon.stub(core, 'core').callsFake(function (name) {
            console.log('---------- mock function: core ------------')
            return `[[${name}]]`
        })
        const value = hello.words('sinon')
        console.log(value)
        expect(value).eq('Hello, [[sinon]]!')
    })

})